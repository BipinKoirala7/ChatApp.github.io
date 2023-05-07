import React from "react"
import useFetch from "./useFetch"

async function Reply() {
    const reply = await useFetch()
    return reply[1]
}

export default Reply