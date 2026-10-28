import React, { useEffect, useState } from "react";
import { Container, Row,  Col, Card, Button, Badge} from "react-bootstrap";
import { Link } from "react-router-dom";
import {getAllRecipesAPI,deleteRecipeAPI} from "./Services/allAPI";
import { FaSearch } from "react-icons/fa";

function Recipe() {

  const [allRecipes, setAllRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [searchitem, setSearchitem] = useState("");


  const getRecipes = async () => {
    try {
      const response = await getAllRecipesAPI();
      console.log("Recipes:", response.data);

      setAllRecipes(response.data);
      setRecipes(response.data);
    } 
    catch (error) {
      console.log("Error:", error);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchitem(value);

    const filteredRecipes = allRecipes.filter((recipe) => recipe.name .toLowerCase() .includes(value.toLowerCase()) );

    setRecipes(filteredRecipes);
  };

  const deleteRecipe = async (id) => {
    const confirmDelete = window.confirm(
      "Do you want to delete this recipe?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteRecipeAPI(id);

      setRecipes((previousRecipes) => previousRecipes.filter((recipe) => String(recipe.id) !== String(id)));
      setAllRecipes((previousRecipes) => previousRecipes.filter( (recipe) => String(recipe.id) !== String(id)));
      alert("Recipe deleted successfully!");

    } 
    catch (error) {

      console.log("Delete Error:", error);
      alert("Failed to delete recipe");
    }
  };

  useEffect(() => {   
    getRecipes();
  }, []);


  return (
    <div style={{ paddingTop: "70px" }}>
    <section className="bg-secondary text-white py-2">
    <Container className="text-center">
    <h1 className="fw-bold"> Our Recipes </h1>
    <p className="lead mb-0">  Discover delicious recipes from Taste-Hub</p>
    </Container>
    </section>

    <Container className="py-5">
    <div className="d-flex justify-content-center mb-5">
          <input type="text" className="form-control"  placeholder="Search recipe name.."  value={searchitem}  onChange={handleSearch}
            style={{ width: "600px" }}  /><FaSearch style={{marginLeft:'-30px',marginTop:'10px'}}/>
        </div>

        <Row>
          {recipes.length > 0 ?(recipes.map((recipe) => (
         <Col key={recipe.id} md={6} lg={4} className="mb-4">
        <Card className="h-100 shadow border-0">
        <Card.Img variant="top" src={recipe.image}  alt={recipe.name} style={{  height: "220px",  objectFit: "cover" }} />
        <Card.Body className="d-flex flex-column">
        <div className="mb-2">
        <Badge bg="warning"  text="dark" >  {recipe.category}  </Badge>
         </div>

        <Card.Title className="fw-bold"> {recipe.name} </Card.Title>
         <p className="text-muted mb-2">  <i className="fa-solid fa-stopwatch"></i> {recipe.time}  </p>
        <h6 className="fw-bold mt-2"> Description </h6>
        <Card.Text> {recipe.description} </Card.Text>
        <div className="mt-auto d-flex justify-content-center gap-2">
         <Button as={Link} to={`/information/${recipe.id}`} variant="primary" >View Recipe</Button>
          <Button variant="danger" onClick={() =>deleteRecipe(recipe.id)} > Delete </Button>
        </div>
       </Card.Body>
        </Card>
       </Col>
            ))
          ):(
            <div className="text-center text-danger">
              <h4>No recipe found...</h4>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Recipe;