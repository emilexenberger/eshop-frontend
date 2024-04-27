import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemService from '../../components/service/ItemService';

function ItemCreate() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        productName: '',
        productCode: '',
        price: 0,
        volume: 0,
    });

    const [errorMessages, setErrorMessages] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let errors = {};
        let hasError = false;

        if (!formData.productName || formData.productName.length < 3) {
            errors.productName = 'Product name must have at least 3 characters.';
            hasError = true;
        }

        if (!formData.productCode || formData.productCode.length !== 4) {
            errors.productCode = 'Product code must have 4 digits.';
            hasError = true;
        }

        if (formData.price <= 0) {
            errors.price = 'Price must be greater than zero.';
            hasError = true;
        }

        setErrorMessages(errors);

        if (hasError) {
            return; // Ak sú chyby, nepostupujte ďalej
        }

        try {
            await ItemService.saveItem(formData);
            alert('Item created successfully');
            navigate('/item/management');
        } catch (error) {
            console.error('Error creating item:', error);
            alert('An error occurred while creating the item');
        }
    };

    return (
        <div className="col-md-4">
            <h1>Create a new item</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-3"> {/* Použitie div pre zachovanie medzery */}
                    <label>Product code</label>
                    <input
                        name="productCode"
                        value={formData.productCode}
                        onChange={handleInputChange}
                        type="number"
                        step="1" // Ak chcete iba celé čísla, použite step 1
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
                        value={formData.productName}
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
                        value={formData.price}
                        onChange={handleInputChange}
                        step="0.01" // Na desatinné hodnoty
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
                        value={formData.volume}
                        onChange={handleInputChange}
                        className="form-control"
                    />
                    {errorMessages.volume && (
                        <div className="text-danger">{errorMessages.volume}</div>
                    )}
                </div>

                <button type="submit" className="btn btn-primary btn-sm">
                    Create an item
                </button>
            </form>
        </div>
    );
}

export default ItemCreate;
