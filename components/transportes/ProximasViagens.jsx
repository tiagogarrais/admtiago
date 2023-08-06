import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import minivan from '/public/images/transportes/minivan-spin.jpg'
import onibus from '/public/images/transportes/onibus-urbano.jpg'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function ProximasViagens() {
  const router = useRouter()
  const { data: session } = useSession()
  const [proximasViagens, setProximasViagens] = useState([])
  const [statusAlterado, setStatusAlterado] = useState('')

  function alterarStatus(evt) {
    if (session.user.email != 'tiago.arrais@ufca.edu.br') {
      const options = Array.from(
        document.getElementsByClassName('statusViagem')
      )
      options.forEach(option => {
        option.disabled = true
      })
      return
    }

    setStatusAlterado(evt.target.value)
  }

  function atualizarStatus(_idStatus) {
    axios
      .patch('/api/transportes/transportes', {
        _id: _idStatus,
        statusViagem: statusAlterado
      })
      .then(function (res) {
        router.reload()
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  function desabilitarCampos() {
    //Desabilitar campos que são privativos dos operadores do sistema.
    if (session.user.email != 'tiago.arrais@ufca.edu.br') {
      const options = Array.from(
        document.getElementsByClassName('statusViagem')
      )
      options.forEach(option => {
        option.disabled = true
      })

      const buttonsSubmit = Array.from(
        document.getElementsByClassName('enviarAtualizacao')
      )
      buttonsSubmit.forEach(button => {
        button.hidden = true
      })

      const selects = Array.from(document.getElementsByTagName('select'))
      selects.forEach(select => {
        select.hidden = true
      })
    }
  }

  function converterData(data) {
    const dataConvertida = Date.parse(data)
    const dataLocal = new Intl.DateTimeFormat('pt-BR').format(dataConvertida)
    return dataLocal
  }

  function converterHora(data) {
    const dataConvertida = Date.parse(data)
    const horaLocal = new Intl.DateTimeFormat('pt-BR', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    }).format(dataConvertida)
    return horaLocal
  }

  React.useEffect(() => {
    async function buscarViagens() {
      try {
        const response = await fetch('/api/transportes/proximas-viagens')
        const viagens = await response.json()
        setProximasViagens(viagens)
      } catch (error) {
        console.error('Erro ao buscar informações do banco de dados:', error)
      }
    }
    buscarViagens()
  }, [])

  function useInterval(callback, delay) {
    useEffect(() => {
      const intervalId = setInterval(callback, delay)

      return () => {
        clearInterval(intervalId)
      }
    }, [callback, delay])
  }

  useInterval(desabilitarCampos, 600)

  return (
    <>
      <h2>Próximas viagens</h2>
      <div className="flex flex-wrap">
        {proximasViagens.map(proximasViagens => (
          <>
            <div className="my-1 px-1 w-full md:w-1/2 lg:w-1/3">
              <article>
                <form>
                  <div className="center">
                    <input
                      type="hidden"
                      className="_id"
                      value={proximasViagens._id}
                      id={proximasViagens._id}
                    ></input>
                  </div>
                  <select className="statusViagem" onChange={alterarStatus}>
                    <option className="" value=""></option>

                    <option className="recebida" value="Recebida">
                      Recebida
                    </option>

                    <option className="aprovada" value="Aprovada pela Direção">
                      Aprovada pela Direção
                    </option>

                    <option className="confirmada" value="Confirmada">
                      Confirmada
                    </option>

                    <option className="não atendida" value="Não atendida">
                      Não atendida
                    </option>
                  </select>

                  <div className="center">
                    <button
                      type="button"
                      className="enviarAtualizacao"
                      onClick={() =>
                        atualizarStatus(
                          document.getElementById(proximasViagens._id).value
                        )
                      }
                    >
                      Atualizar informações
                    </button>
                  </div>
                </form>

                <h3>
                  Destino:
                  <br />
                  {`${proximasViagens.cidade} - ${proximasViagens.uf}`}
                </h3>
                <p>Status: {proximasViagens.statusViagem}</p>
                <p>
                  {proximasViagens.veiculo == 'Minivan' ? (
                    <>
                      <div className="center">
                        <Image
                          src={minivan}
                          alt="Minivan Spin"
                          height={250}
                          width={250}
                        />
                      </div>
                      <p>Minivan Spin (1 a 6 passageiros)</p>
                    </>
                  ) : (
                    <>
                      <div className="center">
                        <Image
                          src={onibus}
                          alt="Ônibus urbano"
                          height={250}
                          width={250}
                        />
                      </div>
                      <p>Ônibus urbano (7 a 44 passageiros)</p>
                    </>
                  )}
                </p>

                {/* Este botão ficará oculto até que esteja com sua funcionalidade completa.
                
                {session.user.email === proximasViagens.email &&
                proximasViagens.statusViagem === 'Recebida' ? (
                  <div className="center">
                    <button
                      onClick={() => {
                        window.alert(
                          'Isto ainda não funciona aqui. Entre em contato pelo e-mail.'
                        )
                      }}
                    >
                      Alterar Solicitação
                    </button>
                  </div>
                ) : (
                  ''
                )} */}

                <p>Data da viagem: {converterData(proximasViagens.dataIda)}</p>
                <p>
                  Horário da viagem: {converterHora(proximasViagens.dataIda)}
                </p>
                <p>
                  Data do retorno: {converterData(proximasViagens.dataRetorno)}
                </p>
                <p>
                  Horário do retorno:{' '}
                  {converterHora(proximasViagens.dataRetorno)}
                </p>
                <p>Saída da praça central? {proximasViagens.saidaCentro}</p>
                <p>Embarque em Abaiara? {proximasViagens.saidaAbaiara}</p>
                <b>
                  <br />
                  <p>Solicitação com prioridade?</p>
                </b>
                <p>1. {proximasViagens.objetivo1}</p>
                <p>2. {proximasViagens.objetivo2}</p>
                <p>3. {proximasViagens.objetivo3}</p>
                <p>4. {proximasViagens.objetivo4}</p>
                <p>5. {proximasViagens.objetivo5}</p>
                <p>6. {proximasViagens.objetivo6}</p>
                <p>7. {proximasViagens.objetivo7}</p>
              </article>
            </div>
          </>
        ))}
      </div>
    </>
  )
}
