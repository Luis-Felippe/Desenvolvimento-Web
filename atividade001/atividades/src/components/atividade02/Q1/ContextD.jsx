import { useContext } from "react"
import ColorTheme from "./ContextCollors"

const ContextD = () => {
    const cor = useContext(ColorTheme)

    return (
        <ColorTheme.Consumer>
            {
                (cor) => {
                    return (
                        <div>
                            <h1 style={{  backgroundColor: cor.bkgD }}>
                                Context D
                            </h1>
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>

    )
}

export default ContextD