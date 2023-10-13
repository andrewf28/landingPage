import {
    ClientCreateForm,
    ClientInfo

} from "../ui-components"

const ClientForm = () => {
    return (
        <div className="container">
            <ClientInfo/>
            <ClientCreateForm/>
        </div>
    );
}
export default ClientForm