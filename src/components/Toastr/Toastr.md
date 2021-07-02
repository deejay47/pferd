# Toastr 

* Customized toast for fancy Alerts
* Based on [React-Bootrstrap Toast](https://react-bootstrap.github.io/components/toasts/)

### Usage

* Import component
`import Toastr from "../Toastr/Toastr";`

* Declare handler State
`const [toastr, setToastr] = useState(false);`

* Setting the boolean value to true will launch the toaster
`setToastr(true);`

* Recommended: In order to relaunch a toastr, you'll need to reset the handling State, you can use the onClose callback to get this done
`const toastrReset = () => {setToastr(false)}`

* Code Example (using ternary operator)
`{toastr ? ( <Toastr show={toastr} title="¡Felicitaciones!" content="Cambios guardados." variant="success" delay={2000} onClose={toastrReset} ></Toastr> ) : ( "" ) }`


### API

| Param | Type | Description | Values |
| --- | --- | --- | --- |
| `show` | boolean | Toastr handler | true, false. Default: false |
| `title` | string | Toastr header title | "Your toaster title". Default: "" |
| `content` | string | Toastr body text | "Your toaster content". Default: "" |
| `variant` | string | Toastr variant | "success", "error", "warning", ""(white). Default: ""|
| `delay` | string | Automatic hide time (ms) | "2000" (for 2 seconds i.e.). Default: "1500" |
| `onClose` | function | Callback function after toastr closing | {yourCallbackFunction}. Default: N/A, but will launch a console warning |