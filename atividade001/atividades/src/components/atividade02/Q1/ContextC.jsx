import ContextD from "./ContextD"
import { useContext } from "react"
import ColorTheme from "./ContextCollors"

const ContextC = () => {
    const cor = useContext(ColorTheme)

    return (
        <ColorTheme.Consumer>
            {
                (cor) => {
                    return (
                        <div>
                            <h1 style={{ backgroundColor: cor.bkgC }}>
                                Context C
                            </h1>
                            <ContextD />
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>

    )
}

export default ContextC