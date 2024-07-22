import { CloseOutlined, DragIndicator, EditOutlined, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import ProductVariantList from '../../product-variant-list/ProductVariantList'

const styles = {
    dragIcon: {
        marginRight: '-40px',
        fontSize: '27px',
        color: 'grey',
        cursor: 'grab'
    },
    titleContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid grey',
        borderRadius: '5px',
        padding: '5px 5px 5px 5px'
    },
    editBtn: {
        cursor: 'pointer',
    },
    addDiscount: {
        backgroundColor: 'green',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px 10px 20px',
        color: 'white',
    },
    discountInput: {
        width: '65px',
        marginRight: '5px',
        border: '0.5px solid grey',
        height: '31px',
        borderRadius: '5px',
    },
    discountSelect: {
        height: '35px',
        borderRadius: '5px',
        paddingRight: '3px',
        fontSize: '15px',
        cursor: 'pointer'
    },
    variantDropBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        color: 'blue',
        fontSize: '12px',
        textDecoration: 'underline'
    },
    productDltContainer: {
        width: '103px'
    }
}

const ProductsList = props => {
    const { productData, serialNo } = props
    console.log('product data in the product list is ===', productData)

    return (
        <React.Fragment>
            <TableRow 
                draggable 
                onDragStart={e => props.ondragStart(e, productData.id)}
                onDragOver={e => props.ondragOver(e)}
                onDrop={e => props.onDropRow(e, serialNo-1)}
                hover sx={{ '& > *': { borderBottom: (productData.showVariant || productData.variants.length <= 1) && 'unset' } }}
            >
                <TableCell>
                    <DragIndicator style={styles.dragIcon} />
                </TableCell>
                <TableCell style={{ paddingRight: '0px', width: '20px' }}>{serialNo}</TableCell>
                <TableCell component="th" scope='row' >
                    <div style={styles.titleContainer}>
                        {productData.product === '' ? 'Select Product' : productData.product}
                        <EditOutlined onClick={() => props.handleDialogToggle(serialNo - 1)} style={styles.editBtn} />
                    </div>
                </TableCell>
                <TableCell style={{paddingRight: '0px', width: '160px'}}>
                    {productData.product === '' ? (
                        <button style={styles.addDiscount}>Add Discount</button>
                    ) : (
                        <React.Fragment>
                            <input onChange={e => props.onChangeProductListValues(e.target.value, serialNo - 1, 'discountNo')} value={productData.discountNo} style={styles.discountInput} type='number' />
                            <select onChange={e => props.onChangeProductListValues(e.target.value, serialNo - 1, 'discountType')} value={productData.discountType} style={styles.discountSelect}>
                                <option value='flatOff'>Flat off</option>
                                <option value='percent' >% off</option>
                            </select>
                        </React.Fragment>
                    )}
                </TableCell>
                <TableCell style={styles.productDltContainer}>
                    {props.productListLength > 1 && (
                        <CloseOutlined onClick={() => props.handleDeleteProduct(serialNo - 1)} style={{ marginBottom: productData.product === '' || productData.variants.length <= 1 ? '5px' : '-10px', marginTop: productData.product === '' || productData.variants.length <= 1 ? '10px' : '35px', cursor: 'pointer' }} />
                    )}
                    {(productData.product !== '' && productData.variants.length > 1) && <p onClick={() => props.onChangeProductListValues(!productData.showVariant, serialNo - 1, 'showVariant')} style={styles.variantDropBtn}>{productData.showVariant ? 'Hide Variants' : 'Show Variants'} {productData.showVariant ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</p>}
                </TableCell>
            </TableRow>
            {(productData.showVariant || productData.variants.length <= 1) && (
                <TableRow sx={{ '& > *': { borderBottom: 'unset', paddingLeft: '50px' } }}>
                    <TableCell align='right' colSpan={6} style={{ paddingBottom: 0, paddingTop: 0 }}>
                        <ProductVariantList
                            variantList={productData.variants}
                            onChangeVariantListValues={(val, ind, type) => props.onChangeVariantListValues(val, ind, type, serialNo-1)}
                            onDltVariant={variantId => props.onDltVariant(variantId, productData.id)}
                            onDragVariantStart={(e, variantId) => props.onDragVariantStart(e, variantId, productData.id)}
                            onDragVariantOver={e => props.onDragVariantOver(e)}
                            onDropVariant={(e, variantIndex) => props.onDropVariant(e, variantIndex, productData.id)}
                        />
                    </TableCell>
                </TableRow>
            )}
        </React.Fragment>
    )
}

export default ProductsList