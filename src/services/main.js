import axios from 'axios';

const port = 11235;

//USERS
    //READ
    const readUser = (token, email) => {
        return axios({
            method: 'get',
            headers: {'token': token},
            url: `http://localhost:${port}/user/email/${email}`,
        });
    };

    //POST
    const postUser = (token, name, username, email, dob, phone_number, diet_preference, food_limitations, food_allergies,firebase_uid) => {
        return axios({
            method: 'post',
            headers: { 'token': token },
            url: `http://localhost:${port}/user/`,
            data: {
                name: name,
                username: username,
                email: email, 
                dob: dob, 
                phone_number: phone_number,
                diet_preference: diet_preference,
                food_limitations: food_limitations, 
                food_allergies: food_allergies, 
                firebase_uid: firebase_uid
            }
        });
    };

//MEAL SCHEDULE
    //READ
    const readMealSchedule = (token, user_id) => {
        return axios({
            method: 'get',
            headers: { 'token': token },
            url: `http://localhost:${port}/mealSchedule/user/${user_id}
            `,
        });
    };

//INGREDIENT
    //READ
    const readIngredient = (token, recipe_id) => {
        return axios({
            method: 'get',
            headers: { 'token': token },
            url: `http://localhost:${port}/ingredient/recipe/${recipe_id}`,
        });
    };

    //CREATE
const createIngredient = (token, ingredient_name, current_recipeID, product_id, ingredient_weight, ingredient_type) => {
    return axios({
        method: 'post',
        headers: { 'token': token },
        url: `http://localhost:11235/ingredient/`,
        data: {
            ingredient_name: ingredient_name,
            recipe_id: current_recipeID,
            product_id: product_id,
            ingredient_weight: ingredient_weight,
            ingredient_weight_type: ingredient_type
        }
    })
}


//RECIPES
    //READ 
    const readRecipes = (token, user_id) => {
        return axios({
            method: 'get',
            headers: { 'token': token },
            url: `http://localhost:${port}/recipe/user/${user_id}`,
        });
    };

    //CREATE
    const createRecipe = (token, recipe_name, health_tag, current_userID, recipe_desc) => {
        return axios({
            method: 'post',
            headers: { 'token' : token},
            url: `http://localhost:11235/recipe/`,
            data: {
                recipe_name: recipe_name,
                health_tags: health_tag,
                recipe_owner: current_userID,
                recipe_notes: recipe_desc
            }
        })
    }

//PANTRY
    //READ
        const readPantry = (id) =>{
            return axios({
                method: 'get',
                url: `http://localhost:${port}/currentPantry/user/${id}`,
            });
        }

//PRODUCT
    //CREATE
const createProduct = (token, product_name, product_url, current_userID, product_image, product_original_weight, product_original_weight_type, product_price) => {
    return axios({
        method: 'post',
        headers: { 'token': token },
        url: `http://localhost:11235/product/`,
        data: {
            product_name: product_name,
            product_url: product_url,
            product_owner: current_userID,
            product_image: product_image,
            product_original_weight: product_original_weight,
            product_original_weight_type: product_original_weight_type,
            product_price: product_price
        }
    })
}


export {
    postUser,
    readUser,
    readMealSchedule,
    readIngredient,
    readRecipes,
    readPantry,
    createRecipe,
    createProduct,
    createIngredient
}