import React, { useEffect, useState } from "react";
import { Container, Card, Button, Badge, Modal, Form } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { getSingleRecipeAPI, updateRecipeAPI } from "./Services/allAPI";
import { useNavigate } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [editRecipe, setEditRecipe] = useState({});
  const getRecipe = async () => {
    try {
      const response = await getSingleRecipeAPI(id);
      console.log("Single Recipe:", response.data);
      setRecipe(response.data);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipe();
  }, [id]);

  if (!recipe) {
    return (
      <div
        className="text-center"
        style={{ paddingTop: "120px" }} >
        <h3>  Loading recipe... </h3>
      </div>
    );
  }

  const handleShow = () => {
    setEditRecipe({ ...recipe });
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditRecipe({
      ...editRecipe,
      [name]: value
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await updateRecipeAPI(
        recipe.id,
        editRecipe
      );
      setRecipe(response.data);
      setShow(false);
      alert("Recipe updated successfully!");
    } 
    catch (error) {
      console.log(error);
      alert("Failed to update recipe");
    }
  };


  return (
    <div style={{ paddingTop: "80px" }}>
      <Container className="py-5">
        <Card className="shadow border-0">
        <Card.Img src={recipe.image}  alt={recipe.name}
            style={{ height: "400px",  objectFit: "cover" }} />

          <Card.Body className="p-4">
            <h1 className="fw-bold"> {recipe.name} </h1>
            <Badge bg="warning" text="dark" className="mb-3"> {recipe.category} </Badge>
            <p className="text-muted">
              <i class="fa-solid fa-stopwatch"></i> Cooking Time: {recipe.time}
            </p>
            <h4 className="fw-bold mt-4">Description</h4>
            <p> {recipe.description}</p>
            <h4 className="fw-bold mt-4">Ingredients</h4>
            <ul>
              {recipe.ingredients
                ?.split(",")
                .map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.trim()}
                  </li>
                ))}
            </ul>
            <h4 className="fw-bold mt-4">  Cooking Instructions </h4>
            <p style={{ whiteSpace: "pre-line" }}>  {recipe.instructions} </p>
            <Button  as={Link}  to={`/recipe`}  variant="dark"  className="mt-3 me-3"> 
             <i class="fa-solid fa-arrow-left"></i>  Back
            </Button>
            <Button  variant="warning"  className="mt-3 me-3" onClick={handleShow} > Edit </Button>
          </Card.Body>
        </Card>
      </Container>
      
      <Modal show={show}  onHide={handleClose}  centered  size="lg"  scrollable>
        <Modal.Header closeButton>
          <Modal.Title> Update Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form> 
            <Form.Group className="mb-3">
              <Form.Label>Recipe Name</Form.Label>
              <Form.Control type="text" name="name" value={editRecipe.name } onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select name="category" value={recipe.category} onChange={handleChange} required>
                <option value="Non-Vegetarian"> Non-Vegetarian </option>
                <option value="Vegetarian"> Vegetarian </option>
                <option value="Fast Food">  Fast Food  </option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Cooking Time</Form.Label>
              <Form.Control type="text"  name="time" value={editRecipe.time } onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text"  name="image"  value={editRecipe.image }  onChange={handleChange}  />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control  as="textarea"  rows={3}  name="description" value={editRecipe.description }  onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control  as="textarea"  rows={4}  name="ingredients"  value={editRecipe.ingredients }  onChange={handleChange} />
            </Form.Group>
   
            <Form.Group className="mb-3">
              <Form.Label>Cooking Instructions</Form.Label>
              <Form.Control  as="textarea" rows={5} name="instructions" value={editRecipe.instructions } onChange={handleChange} />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}> Cancel</Button>
          <Button variant="success"onClick={handleUpdate}>Update </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RecipeDetails;