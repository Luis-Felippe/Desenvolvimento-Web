import ContextB from "./ContextB";
import ContextC from "./ContextC";
import ColorTheme from "./ContextCollors";

const ContextA = () => {
    const cores = { bkgA: "green", bkgB: "red", bkgC: "yellow", bkgD: "blue" };

    return (
         <ColorTheme.Provider value= { cores } >
            <ContextB />
            <ContextC />
         </ColorTheme.Provider>
    )
}

export default ContextA