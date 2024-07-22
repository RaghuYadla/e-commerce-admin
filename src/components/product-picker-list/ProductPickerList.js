import { Checkbox, TableCell, TableRow } from '@mui/material'
import React from 'react'
import VariantPickerList from '../variant-picker-list/VariantPickerList'

const styles = {
    productImage: {
        width: '35px',
        height: '35px',
        borderRadius: '3px',
        marginRight: '10px'
    },
    productCell: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    productTitle: {
        fontSize: '17px',
        color: 'grey',
    }
}

const ProductPickerList = props => {
    const { product, index, selectedList } = props

    const isIt = selectedList.filter(e => e.id == product.id)
    let selectedVariants = []
    if (isIt.length > 0) {
        selectedVariants = isIt[0].variants.map(e => e.variantId)
    }

    const onCheckVariantPicker = (variant, ind) => {
        const obj = {...product, variants: [variant]}
        props.onCheckProduct(obj)
    }
 
    return (
        <React.Fragment>
            <TableRow hover>
                <TableCell style={styles.productCell}>
                    <Checkbox
                        checked={selectedVariants.length === product.variants.length}
                        indeterminate={selectedVariants.length !== product.variants.length && isIt.length > 0}
                        onChange={() => props.onCheckProduct(product)}
                    />
                    <img src={product.image?.src} alt='Image' style={styles.productImage} />
                    <p style={styles.productTitle}>{product.title}</p>
                </TableCell>
            </TableRow>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }}>
                    <VariantPickerList
                        variants={product.variants}
                        options={product.options}
                        selectedVariants={selectedVariants}
                        onCheckVariantPicker={onCheckVariantPicker}
                    />
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

export default ProductPickerList