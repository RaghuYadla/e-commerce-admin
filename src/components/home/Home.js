import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getProductList } from "../../services/ProductService";
import ProductsList from "../product-list/products-list/ProductsList";
import ProductPickerDialog from "../product-picker/product-picker-dialog/ProductPickerDialog";

const styles = {
    tableContainer : {
        maxWidth: '820px',
        maxHeight :'70vh'
    },
    mainContainer: {
        minWidth: '800px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flexStart',
        alignItems: 'center'
    },
    heading: {
        marginRight: 'auto',
    },
    tableHeadCell : {
        fontWeight: 'bold',
        fontSize: '18px'
    },
    addButton: {
        marginLeft: 'auto',
        cursor: 'pointer',
        marginTop: '15px',
        padding: '7px 15px 7px 15px',
        borderRadius: '5px',
        border: '1px solid grey',
        boxShadow: '0 0 2px 2px grey',
        color: 'green',
        // fontFamily: 'roboto'
    }
}

const emptyProduct = {
    id: '',
    product: '',
    discountNo: 0,
    discountType: 'percent',
    showVariant: false,
    variants: []
}

const Home = () => {
    const [productList, setProductList] = useState([{...emptyProduct}])
    const [currentRow, setCurrentRow] = useState(0)
    const [pickerList, setPickerList] = useState([])
    const [dataLimit, setDataLimit] = useState([0, 10])
    const [preDataLength, setPreDataLength] = useState(10)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [search, setSearch] = useState('');

    useEffect(() => {
        if (preDataLength < 10) {
            return
        }
        const data = getProductList(dataLimit, search);
        console.log('getting data from api is ===', data)
        setPickerList(pre => ([...pre, ...data]))
        setPreDataLength(data.length)
    }, [dataLimit])

    const onChangeSearch = value => {
        setSearch(value)
    }

    const trackScrolling = (e) => {
        const {scrollHeight, scrollTop, clientHeight} = e.target
        if ((scrollHeight - scrollTop) - clientHeight <= 1 ) {
            console.log('scroll reached the end...')
            setDataLimit(pre => [pre[0] + 10, pre[1] + 10])
        }
    }

    const handleDialogToggle = (index = 0) => {
        setCurrentRow(index)
        setDialogOpen(pre => !pre)
    }

    const onAddEmptyProduct = () => {
        setProductList(pre => [...pre, {...emptyProduct}])
    }

    const handleDeleteProduct = index => {
        setProductList(pre => [...pre.slice(0, index), ...pre.slice(index+1)])
    }

    const onAddSelectedToProductList = selectedList => {
        console.log('selected added to product list is ===', selectedList)
        setProductList(selectedList)
        handleDialogToggle()
    }

    const onChangeProductListValues = (value, index, key) => {
        const obj = {...productList[index]}
        obj[key] = value
        setProductList(pre => [...pre.slice(0, index), obj, ...pre.slice(index+1)])
    }

    const onChangeVariantListValues = (value, varInd, key, proInd) => {
        let proObj = {...productList[proInd]}
        proObj.variants[varInd][key] = value
        setProductList(pre =>[...pre.slice(0, proInd), proObj, ...pre.slice(proInd+1)])
    }

    const onDltVariant = (varId, proId) => {
        setProductList(pre => pre.map(e => {
            if (e.id == proId) {
                return {...e, variants: e.variants.filter(v => v.variantId != varId)}
            }
            return e
        }))
    }

    const ondragStart = (e, productId) => {
        console.log('e in the onDragStart is ===', productId)
        e.dataTransfer.setData('id', productId.toString())
    }

    const onDragVariantStart = (e, variantId, productId) => {
        e.dataTransfer.setData('variantId', variantId.toString())
        e.dataTransfer.setData('productId', productId.toString())
    }

    const ondragOver = e => {
        e.preventDefault()
    }

    const onDragVariantOver = e => {
        e.preventDefault()
    }

    const onDropRow = (event, dropIndex) => {
        const dragId = event.dataTransfer.getData('id')
        let dummy = productList.filter(e => e.id != dragId)
        console.log('id in the onDropRow is ===', dragId, 'index is ===', dropIndex, '==', dummy)
        dummy.splice(dropIndex, 0, productList.find(e => e.id == dragId))
        setProductList(dummy)
    }

    const onDropVariant = (event, variantIndex, productId) => {
        const dragProductId = event.dataTransfer.getData('productId')
        const dragVariantId = event.dataTransfer.getData('variantId')
        if (dragProductId == productId) {
            console.log('drag product and variantIds are ===', dragProductId, '===', dragVariantId)
            let variantList = productList.find(e => e.id == productId).variants
            let filteredVariants = variantList.filter(e => e.variantId != dragVariantId)
            filteredVariants.splice(variantIndex, 0, variantList.find(e => e.variantId == dragVariantId))
            let dummy = productList.map(e => {
                if (e.id == productId) {
                    return {...e, variants: filteredVariants}
                }
                return e
            })
            setProductList(dummy)
        } else {
            alert('Cannot add variant to another product.')
        }
    }

    return (
        <div style={styles.mainContainer}>
            <h1 style={styles.heading} >Add Products</h1>
            <TableContainer component={Paper} style={styles.tableContainer}>
                <Table size="small" stickyHeader >
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell />
                            <TableCell style={styles.tableHeadCell} >Product</TableCell>
                            <TableCell style={styles.tableHeadCell} >Discount</TableCell>
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productList.map((each, ind) => (
                            <ProductsList key={ind} 
                            serialNo={ind + 1} 
                            productListLength={productList.length}
                            productData={each}
                            handleDialogToggle={handleDialogToggle}
                            handleDeleteProduct={handleDeleteProduct}
                            onChangeProductListValues={onChangeProductListValues}
                            onChangeVariantListValues={onChangeVariantListValues}
                            onDltVariant={onDltVariant}
                            ondragStart={ondragStart}
                            ondragOver={ondragOver}
                            onDropRow={onDropRow}
                            onDragVariantStart={onDragVariantStart}
                            onDragVariantOver={onDragVariantOver}
                            onDropVariant={onDropVariant}
                             />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <button onClick={onAddEmptyProduct} style={styles.addButton}>Add Product</button>
            {dialogOpen && 
                <ProductPickerDialog
                handleDialogToggle={handleDialogToggle}
                dialogOpen={dialogOpen}
                pickerList={pickerList}
                trackScrolling={trackScrolling}
                productList={productList}
                currentRow={currentRow}
                onAddSelectedToProductList={onAddSelectedToProductList}
                search={search}
                onChangeSearch={onChangeSearch}
             />
            }
        </div>
    );
};

export default Home;

// This is the data format of the product list.
const selected = [
    {
        id: 'productId',
        product: 'product name',
        discountNo: 'discount integer',
        discountType: 'value of the select',
        showVariant: 'true or false',
        variants: [
            {
                variantId: 'id of the variant',
                name: 'title of the variant',
                discountNo: 'discount integer',
                discountType: 'value of the select',
            },
            {
                variantId: 'id of the variant',
                name: 'title of the variant',
                discountNo: 'discount integer',
                discountType: 'value of the select',
            }
        ]
    }
]