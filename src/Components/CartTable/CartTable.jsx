import React from "react";
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useGlobalContext } from '../../context/context';
import { formatPrice } from '../../utils/helpers';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';

import RemoveIcon from '@mui/icons-material/Remove';
export default function CartTable() {
    const { cart,
            toggleAmount,
        removeItem } = useGlobalContext();

    return <React.Fragment>
        <TableContainer component={Paper}>
            <Table sx={{
                minWidth: 650
            }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Item

                        </TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Subtotal</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cart.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{
                                '&:last-child td, &:last-child th': { border: 0 }
                            }}
                        >
                            <TableCell component="th" scope="row"
                                sx
                                ={{
                                    display: 'flex',
                                    alignItems: 'center',

                                }}
                            >
                                <img src={row.image} alt={row.name} style={{ width: '120px', height: '120px', borderRadius: '5px' }} />
                                <Box sx={{
                                    marginLeft: '15px',
                                    textTransform: 'capitalize',
                                }}>
                                    <h3>
                                        <strong>{row.name}</strong>
                                    </h3>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-evenly',

                                    }}>
                                        <span>color :</span>
                                        <div style={{
                                            backgroundColor: row.color,
                                            borderRadius: '50%',
                                        }}
                                            className='color'>


                                        </div>
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell
                                sx={{
                                    color: '#007fff',
                                    fontWeight: 'bold',
                                }}
                                align="right">$ {

                                    formatPrice(row.price)
                                }</TableCell>
                            <TableCell
                                align="right"

                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-evenly',
                                    }}
                                >

                                    <RemoveIcon
                                        sx={{
                                            cursor: 'pointer',
                                            marginBottom: '0px',
                                        }}
                                        onClick={() => {
                                            toggleAmount(row.id,'desc')
                                        }}
                                    />
                                    <Typography
                                        component='span'
                                        sx={{
                                            marginBottom: '0px',
                                            fontWeight: 'bold',
                                            fontSize: '20px',
                                        }}
                                    >{
                                            row.amount
                                    }</Typography>
                                    <AddIcon
                                        sx={{
                                            cursor: 'pointer',
                                            marginBottom: '0px',
                                        }}
                                        onClick={() => {
                                            toggleAmount(row.id,'inc')
                                        }}
                                    />                                  
                                </Box>
                            </TableCell>
                            <TableCell align="right"
                                sx={{
                                    color: '#007fff',
                                    fontWeight: 'bold',
                                }}
                            >$ {
                                formatPrice(row.price * row.amount)
                                }</TableCell>
                            <TableCell align="right">
                                <IconButton aria-label="delete"
                                    onClick={() => {
                                        removeItem(row.id)
                                    }}
                                    size="large">
                                    <DeleteIcon
                                        color="error"
                                        fontSize="inherit" />
                                </IconButton>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    </React.Fragment>;
}
