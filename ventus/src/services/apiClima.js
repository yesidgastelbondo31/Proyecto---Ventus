const API_KEY = "8a4da5d592076bd8ec093170cc9ba1c5"

export const obtenerClima = async (ciudad) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`
  )

  if (!res.ok) {
    throw new Error("Error en la API")
  }

  return await res.json()
}
export const obtenerPronostico = async (ciudad) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`
  )

  if (!res.ok) throw new Error("Error pronóstico")

  return await res.json()
}