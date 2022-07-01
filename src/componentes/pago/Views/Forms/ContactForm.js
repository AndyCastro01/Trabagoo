import React from 'react';
import {
    TextField,
    Grid,
    Typography
} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useStateValue } from "../../StateContext";

const ContactForm = () => {

    const [{ formValues }, dispatch] = useStateValue();

    return <>
        <Grid item xs={12}>
            <Typography variant="h6">Información de envio</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField
                label="Nombre(s)"
                name="firstname"
                variant="outlined"
                required
                fullWidth
                value={formValues.firstname}
                onChange={e =>
                    dispatch({
                        type: 'editFormValue',
                        key: "firstname",
                        value: e.target.value
                    })
                }
            />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField
                label="Apellido"
                name="lastname"
                variant="outlined"
                required
                fullWidth
                value={formValues.lastname}
                onChange={e =>
                    dispatch({
                        type: 'editFormValue',
                        key: "lastname",
                        value: e.target.value
                    })
                }
            />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField
                label="Correo Electronico"
                name="email"
                variant="outlined"
                required
                fullWidth
                value={formValues.email}
                onChange={e =>
                    dispatch({
                        type: 'editFormValue',
                        key: "email",
                        value: e.target.value
                    })
                }
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label="Dirección 1"
                name="address1"
                variant="outlined"
                required
                fullWidth
                value={formValues.line1}
                onChange={e =>
                    dispatch({
                        type: 'editFormValue',
                        key: "line1",
                        value: e.target.value
                    })
                }
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label="Direccion 2 (opcional)"
                name="line2"
                variant="outlined"
                fullWidth
                value={formValues.line2}
                onChange={e =>
                    dispatch({
                        type: 'editFormValue',
                        key: "line2",
                        value: e.target.value
                    })
                }
            />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField
                label="Codigo Postal"
                name="postal_code"
                variant="outlined"
                required
                fullWidth
                value={formValues.postal_code}
                onChange={e =>
                    dispatch({
                        type: 'editFormValue',
                        key: "postal_code",
                        value: e.target.value
                    })
                }
            />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField
                label="Ciudad"
                name="city"
                variant="outlined"
                required
                fullWidth
                value={formValues.city}
                onChange={e =>
                    dispatch({
                        type: 'editFormValue',
                        key: "city",
                        value: e.target.value
                    })
                }
            />
        </Grid>
        <Grid item xs={12} sm={4}>
            <Autocomplete
                options={countries}
                getOptionLabel={option => option.name}
                renderInput={params =>
                    <TextField
                        label="Estado"
                        name="country"
                        variant="outlined"
                        required
                        fullWidth
                        {...params}
                    />
                }
                value={formValues.country}
                onChange={(event, value) => {
                    dispatch({
                        type: 'editFormValue',
                        key: "country",
                        value: value
                    })
                }}
            />
        </Grid>
    </>
}

export default ContactForm;


const countries = [
    { name: 'Aguascalientes', code: 'Ags' },
    { name: 'Baja California', code: 'B.C' },
    { name: 'Baja California Sur', code: 'B.C.S' },
    { name: 'Campeche', code: 'Camp' },
    { name: 'Chiapas', code: 'Chis' },
    { name: 'Chihuahua', code: 'Chih' },
    { name: 'Ciudad de México', code: 'Cdmx' },
    { name: 'Coahuila', code: 'Coah' },
    { name: 'Colima', code: 'Col' },
    { name: 'Durango', code: 'Dg' },
    { name: 'Guanajuato', code: 'Gto' },
    { name: 'Guerrero', code: 'Gro' },
    { name: 'Hidalgo', code: 'Hgo' },
    { name: 'Jalisco', code: 'Jal' },
    { name: 'México', code: 'Edomex' },
    { name: 'Michoacán', code: 'Mich' },
    { name: 'Morelos', code: 'Mor' },
    { name: 'Nayarit', code: 'Nay' },
    { name: 'Nuevo León', code: 'N.L' },
    { name: 'Oaxaca', code: 'Oax' },
    { name: 'Puebla', code: 'Pue' },
    { name: 'Querétaro', code: 'Qro' },
    { name: 'Quintana Roo', code: 'Q.Roo' },
    { name: 'San Luis Potosí', code: 'S.L.P' },
    { name: 'Sinaloa', code: 'Sin' },
    { name: 'Sonora', code: 'Son' },
    { name: 'Tabasco', code: 'Tap' },
    { name: 'Tamaulipas', code: 'Tamps' },
    { name: 'Tlaxcala', code: 'Tlax' },
    { name: 'Veracruz', code: 'Ver' },
    { name: 'Yucatán', code: 'Yuc' },
    { name: 'Zacatecas', code: 'Zac' }
]
