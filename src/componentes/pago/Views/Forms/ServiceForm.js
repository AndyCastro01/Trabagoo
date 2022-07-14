import React from 'react';
import {
    TextField,
    Grid,
    Typography
} from "../../../../../node_modules/@material-ui/core";
import { useStateValue } from "../../StateContext";

const ServiceForm = () => {

    const [{ formValues }, dispatch] = useStateValue();

    return <>
        <Grid item xs={12}>
            <Typography variant="h6">Datos Adicionales</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                type="date"
                label="Fecha"
                name="date"
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                value={formValues.date}
                onChange={e =>
                    dispatch({
                        type: 'editFormValue',
                        key: "date",
                        value: e.target.value
                    })
                }
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label="Servicio"
                name="service"
                variant="outlined"
                fullWidth
                value={formValues.service}
                onChange={e =>
                    dispatch({
                        type: 'editFormValue',
                        key: "service",
                        value: e.target.value
                    })
                }
            />
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h6">Redes Sociales (Opcional)</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label="facebook"
                name="Facebook"
                variant="outlined"
                fullWidth
                value={formValues.facebook}
                onChange={e =>
                    dispatch({
                        type: 'editFormValue',
                        key: "facebook",
                        value: e.target.value
                    })
                }
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label="twitter"
                name="Twitter"
                variant="outlined"
                fullWidth
                value={formValues.twitter}
                onChange={e =>
                    dispatch({
                        type: 'editFormValue',
                        key: "twitter",
                        value: e.target.value
                    })
                }
            />
        </Grid>
    </>
}

export default ServiceForm;
