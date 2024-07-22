import { Propane, Search } from '@mui/icons-material';
import { Dialog, DialogContent, DialogTitle, Paper, Slide, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ProductPickerList from '../product-picker-list/ProductPickerList';


const styles = {
    dialog: {
        height: '90vh'
    },
    dialogHeader: {
        color: 'grey',
        margin: '15px 0px 0px 25px',
        // lineHeight: '0',
    },
    productPickerTable: {
        maxHeight: '83%',
        minWidth: '520px',
    },
    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid grey',
        borderRadius: '5px',
        width: '93%',
        padding: '16px'
    },
    searchInput: {
        border: 'none',
        width: '95%',
        outline: 'none',
        margin: '-10px -7px -10px 5px',
        fontSize: '15px'
    },
    searchIcon: {
        margin: '-10px 0px -10px -4px',
        cursor: 'pointer'
    },
    pickerFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 10px 0 10px',
        fontSize: '13px'
    },
    buttonCard: {
        width: '150px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cancelButton: {
        padding: '6px 17px 6px 17px',
        borderRadius: '5px',
        border: '1px solid red',
        boxShadow: '0 0 1px 1px red',
        color: 'red',
        cursor: 'pointer',
    },
    addButton: {
        padding: '8px 17px 8px 17px',
        backgroundColor: 'green',
        borderRadius: '5px',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
    }
}

const ProductPicker = (props) => {

    const [selectedList, setSelectedList] = useState([...props.productList])
    const [presentRow, setPresentRow] = useState(-1)
    const [search, setSearch] = useState('');

    const onCheckProduct = checked => {
        let dummy = []
        let current
        if (selectedList.some(e => e.id == checked.id)) {
            let current = selectedList.find(e => e.id == checked.id)
            console.log('current in onCheckProduct ===', current)
            if (current.variants.length == checked.variants.length && checked.variants.length > 1) {
                dummy = selectedList.filter(e => e.id != checked.id)
            } else if (current.variants.length == checked.variants.length && checked.variants[0].id == current.variants[0].variantId) {
                dummy = selectedList.filter(e => e.id != checked.id)
            } else if (current.variants.some(e => e.variantId == checked.variants[0].id)) {
                let updatedVariants = current.variants.filter(e => e.variantId != checked.variants[0].id)
                dummy = selectedList.map(e => {
                    if (e.id == checked.id) {
                        return { ...e, variants: updatedVariants }
                    }
                    return e
                })
            } else {
                dummy = selectedList.map(e => {
                    if (e.id == checked.id) {
                        return {
                            ...e, variants: [...e.variants,
                            {
                                variantId: checked.variants[0].id, name: checked.variants[0].title,
                                discountNo: '', discountType: 'percent',
                            }
                            ]
                        }
                    }
                    return e
                })
            }
        } else {
            dummy = [...selectedList]
            const obj = {
                id: checked.id,
                product: checked.title,
                discountNo: '',
                discountType: 'percent',
                showVariant: false,
                variants: checked.variants.map(e => ({
                    variantId: e.id,
                    name: e.title,
                    discountNo: '',
                    discountType: 'percent',
                }))
            }
            if (presentRow == -1) {
                dummy.splice(props.currentRow, 1, obj)
                setPresentRow(props.currentRow+1)
            } else {
                dummy.splice(presentRow, 0, obj)
            }
        }
        setSelectedList(dummy)
    }

    return (
        <Dialog
            open={props.dialogOpen}
            onClose={props.handleDialogToggle}
        >
            <DialogContent style={styles.dialog}>
                <h3 style={styles.dialogHeader}>Select Products</h3>
                <TableContainer style={styles.productPickerTable} onScroll={props.trackScrolling} >
                    <Table size='small' stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <div style={styles.searchContainer}>
                                        <Search style={styles.searchIcon} />
                                        <input value={search} onChange={(e) => setSearch(e.target.value)} style={styles.searchInput} type='search' />
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.pickerList.filter(e => e.title.toLowerCase().includes(search.toLowerCase())).map((e, i) => (
                                <ProductPickerList
                                    key={i}
                                    product={e}
                                    index={i}
                                    selectedList={selectedList}
                                    onCheckProduct={onCheckProduct}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div style={styles.pickerFooter}>
                    <p>Products Selected</p>
                    <div style={styles.buttonCard}>
                        <button onClick={props.handleDialogToggle} style={styles.cancelButton}>Cancel</button>
                        <button onClick={() => props.onAddSelectedToProductList(selectedList)} style={styles.addButton}>Add</button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ProductPicker