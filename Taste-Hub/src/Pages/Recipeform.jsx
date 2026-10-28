import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { toast } from "react-toastify";
import { addRecipeAPI } from './Services/allAPI';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Recipeform() {
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState({
    name: '',
    category: '',
    time: '',
    image: '',
    ingredients: '',
    instructions: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value, });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !recipe.name ||
      !recipe.category ||
      !recipe.time ||
      !recipe.image ||
      !recipe.description ||
      !recipe.ingredients ||
      !recipe.instructions
    ) {
      toast.info("Please fill all fields");
      return;
    }

    try {

      const response = await addRecipeAPI(recipe);
      console.log(response);
      if (response.status === 201) {
        toast.success('Recipe added successfully!');
        setRecipe({
          name: '',
          category: '',
          time: '',
          image: '',
          ingredients: '',
          instructions: '',
          description: ''
        });
         setTimeout(() => {
          navigate('/recipe');
        }, 1000);
      }

    } catch (error) {
      toast.error('Failed to add recipe!.')
      console.log(error);

    }
  };


  const handleReset = () => {

    setRecipe({
      name: "",
      category: "",
      time: "",
      image: "",
      description: "",
      ingredients: "",
      instructions: "",
    });

  };

  return (
    <div
      style={{
        paddingTop: '70px',
        minHeight: '100px',
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498837167922-ddd27525d352')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }} >

      <section className="bg-secondary text-white py-2">
        <Container className="text-center">
          <h1 className="fw-bold">Add Your Recipe</h1>
          <p className="text-light">Share your recipe with the Taste-Hub </p>
        </Container>
      </section>

      <Container className="py-5">
        <Row className="justify-content-center">
          <Col>
            <Card className="border-1">
              <Card.Body className="p-4">
                <h3 className="fw-bold mb-4 text-center">Recipe Details </h3>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>  Recipe Name  :</Form.Label>
                    <Form.Control type="text" name="name" value={recipe.name} onChange={handleChange} placeholder="Enter recipe name" required />
                  </Form.Group>

                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Category :</Form.Label>
                        <Form.Select name="category" value={recipe.category} onChange={handleChange} required>
                          <option value=""> Select Category</option>
                          <option value="Non-Vegetarian"> Non-Vegetarian </option>
                          <option value="Vegetarian"> Vegetarian </option>
                          <option value="Fast Food">  Fast Food  </option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label> Cooking Time :</Form.Label>
                        <Form.Control type="text" name="time" value={recipe.time} onChange={handleChange} placeholder="enter the time with min..." required />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label> Recipe Image URL :</Form.Label>
                    <Form.Control type="url" name="image" value={recipe.image} onChange={handleChange} placeholder="Paste image URL here ...." />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label> Description</Form.Label>
                    <Form.Control rows={3} as="textarea" name="description" value={recipe.description} onChange={handleChange}
                      placeholder="Write a short description about your recipe...." />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label> Ingredients : </Form.Label>
                    <Form.Control rows={5} as="textarea" name="ingredients" value={recipe.ingredients} onChange={handleChange}
                      placeholder="Write the ingredients here...." required />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>  Cooking Instructions :</Form.Label>
                    <Form.Control rows={5} as="textarea" name="instructions" value={recipe.instructions} onChange={handleChange}
                      placeholder="Write cooking instructions here...." required />
                  </Form.Group>

                  <div className="d-flex gap-3 justify-content-center">
                    <Button type="submit" variant="warning" className="fw-bold px-4" >Add Recipe </Button>
                    <Button type="button" variant="secondary" onClick={handleReset}>Reset</Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Recipeform;