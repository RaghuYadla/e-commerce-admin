import { Checkbox, Table, TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'

const styles = {
    variantCheckbox: {
        marginRight: '-37px',
        marginLeft: '5px'
    },
    variantTitle: {
        color: 'grey',
        width: '43%'
    },
    variantQuantity: {
        width: '27%'
    },
    variantPrice: {
        width: '18%'
    }
}

const VariantPickerList = props => {
  return (
    <Table size='small'>
        <TableBody>
            {props.variants.map((e, ind) => (
                <TableRow hover key={ind}>
                    <TableCell style={{width: "8%"}}>
                        <Checkbox 
                            style={styles.variantCheckbox}
                            checked={props.selectedVariants.includes(e.id)}
                            onChange={() => props.onCheckVariantPicker(e, ind)}
                        />
                    </TableCell>
                    <TableCell style={styles.variantTitle}>
                        {e.title}
                    </TableCell>
                    <TableCell style={styles.variantQuantity}>
                        {e.inventory_quantity < 1 || e.inventory_quantity == undefined ? 'Not' : e.inventory_quantity} available
                    </TableCell>
                    <TableCell style={styles.variantPrice}>
                        $ {e.price}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
  )
}

export default VariantPickerList