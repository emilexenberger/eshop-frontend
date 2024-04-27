import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ItemService from '../../components/service/ItemService';

function ItemUpdate() {
    const navigate = useNavigate();
    const { itemId } = useParams();

    const [itemData, setItemData] = useState({
        id: '',
        productName: '',
        productCode: 0,
        price: 0,
        volume: 0,
    });

    const [errorMessages, setErrorMessages] = useState({});

    useEffect(() => {
        fetchItemDataById(itemId);
    }, [itemId]);

    const fetchItemDataById = async (itemId) => {
        try {
            const response = await ItemService.getItemById(itemId);
            const { id, productName, productCode, price, volume } = response;
            setItemData({ id, productName, productCode, price, volume });
        } catch (error) {
            console.error('Error fetching item data:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setItemData({ ...itemData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let errors = {};
        let hasError = false;

        if (!itemData.productName || itemData.productName.length < 3) {
            errors.productName = 'Product name must have at least 3 characters.';
            hasError = true;
        }

        if (!itemData.productCode || itemData.productCode.toString().length !== 4) {
            errors.productCode = 'Product code must have 4 digits.';
            hasError = true;
        }

        if (itemData.price <= 0) {
            errors.price = 'Price must be greater than zero.';
            hasError = true;
        }

        setErrorMessages(errors);

        if (hasError) {
            return;
        }

        try {
            await ItemService.saveItem(itemData);
            alert('Item updated successfully');
            navigate('/item/management');
        } catch (error) {
            console.error('Error updating item:', error);
            alert('An error occurred while updating the item.');
        }
    };

    return (
        <div className="col-md-4">
            <h1>Update Item</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Product code</label>
                    <input
                        name="productCode"
                        value={itemData.productCode}
                        onChange={handleInputChange}
                        type="number"
                        step="1"
                        className="form-control"
                    />
                    {errorMessages.productCode && (
                        <div className="text-danger">{errorMessages.productCode}</div>
                    )}
                </div>

                <div className="mb-3">
                    <label>Product name</label>
                    <input
                        name="productName"
                        value={itemData.productName}
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                    />
                    {errorMessages.productName && (
                        <div className="text-danger">{errorMessages.productName}</div>
                    )}
                </div>

                <div className="mb-3">
                    <label>Price</label>
                    <input
                        name="price"
                        type="number"
                        step="0.01"
                        value={itemData.price}
                        onChange={handleInputChange}
                        className="form-control"
                    />
                    {errorMessages.price && (
                        <div className="text-danger">{errorMessages.price}</div>
                    )}
                </div>

                <div className="mb-3">
                    <label>Volume</label>
                    <input
                        name="volume"
                        type="number"
                        value={itemData.volume}
                        onChange={handleInputChange}
                        className="form-control"
                    />
                    {errorMessages.volume && (
                        <div className="text-danger">{errorMessages.volume}</div>
                    )}
                </div>

                <button type="submit" className="btn btn-primary btn-sm">
                    Update Item
                </button>
            </form>
        </div>
    );
}

export default ItemUpdate;
