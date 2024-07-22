import { CloseOutlined, DragIndicatorRounded } from '@mui/icons-material'
import { colors, Table, TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'

const styles = {
    dragIcon: {
        color: 'grey',
        cursor: 'grab',
        marginLeft: '45px'
    },
    variantName: {
        border: '1px solid grey',
        padding: '3px 2px 3px 10px',
        width: '250px',
        overFlow: 'auto',
        borderRadius: '13px',
    },
    discountInput: {
        border: '1px solid grey',
        padding: '4px 2px 4px 10px',
        fontSize: '15px',
        borderRadius: '13px',
        width: '60px',
        marginRight: '5px'
    },
    discountSelect: {
        border: '1px solid grey',
        padding: '3px 2px 3px 10px',
        fontSize: '15px',
        borderRadius: '13px',
        cursor: 'pointer',
        // marginRight: '-80px'
    },
    deleteBtn: {
        cursor: 'pointer'
    },
}

const ProductVariantList = props => {
    const { variantList } = props
    return (
        <Table size='small'>
            <TableBody>
                {variantList.map((e, i) => (
                    <TableRow 
                        hover 
                        sx={{ '& > *': { borderBottom: 'unset'} }}
                        draggable
                        onDragStart={event => props.onDragVariantStart(event, e.variantId)}
                        onDragOver={event => props.onDragVariantOver(event)}
                        onDrop={event => props.onDropVariant(event, i)}
                    >
                        <TableCell style={{width: '20px', paddingLeft: '40px', paddingRight: '0px'}}>
                            <DragIndicatorRounded style={styles.dragIcon}/>
                        </TableCell>
                        <TableCell style={{paddingRight: '0px', width: '280px'}}>
                            <div style={styles.variantName} >{e.name}</div>
                        </TableCell>
                        <TableCell style={{paddingRight: '0px', width: '170px'}} >
                            <input onChange={e => props.onChangeVariantListValues(e.target.value, i, 'discountNo')} value={e.discountNo} style={styles.discountInput} type='number' />
                            <select onChange={e => props.onChangeVariantListValues(e.target.value, i, 'discountType')} value={e.discountType} style={styles.discountSelect}>
                                <option value='flatOff'>Flat off</option>
                                <option value='percent' >% off</option>
                            </select>
                        </TableCell>
                        <TableCell>
                            <CloseOutlined onClick={() => props.onDltVariant(e.variantId)} style={styles.deleteBtn} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default ProductVariantList