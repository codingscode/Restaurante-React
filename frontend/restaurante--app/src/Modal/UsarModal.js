import { useState } from 'react'

const UsarModal = () => {
    const [estaMostrando, setEstaMostrando] = useState(false)

    function toggle() {
        setEstaMostrando(!estaMostrando)
    }

    return { estaMostrando, toggle}
}

export default UsarModal