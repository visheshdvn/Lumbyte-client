import React, { useEffect } from "react"
import { useRouter } from "next/router"

const redirect = ({to}) => {
  const router = useRouter()
  useEffect(() => {
    router.push(to)
  })
  return <div />
}

export default redirect
