import { useEffect, useState } from 'react';

import Category from '../../types/categories.types';
import { env } from 'process';

import './categories.styles.css';
import axios from 'axios';


const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([])

    const feachCategories = async () => {
        try {
            const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/api/categories`);
            setCategories(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        feachCategories();
    }, [])

    return (
        <div className="categories-container">
            <div className="categories-content">

            </div>
        </div>
    )
}

export default Categories;