import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';  

function Home() {
  return (
    <div>
      <section className="text-white d-flex align-items-center" style={{ minHeight: '600px', paddingTop:'160px', backgroundImage:' url("https://wallpaperaccess.com/full/1317125.png")',
       backgroundSize:'cover', backgroundPosition: 'center'}}>
        <Container>
        <Row>
        <Col className='lg-4'>
        <p className=" text-warning fw-bold mb-3"> Welcome to Taste-Hub</p>
        <h1 className=" fw-bold "> Discover Delicious Recipes</h1>
        <p style={{fontFamily:'system-ui'}} className= "mt-3"> Find easy, tasty and delicious recipes from here. Explore Famous Dishes and make your cooking special. </p>
        <div className="mt-4">
        <Button as={Link} to={"/recipe"} className="me-3 fw-bold btn btn-warning fs-5">  Explore Recipes </Button>
        <Button as={Link}  to={"/recipecard"} className="me-3 fw-bold btn btn-light fs-5" > Add Recipe </Button>
        </div>
        </Col>
        </Row>
        </Container>
        </section>

      <section className="py-5 bg-light">
      <Container>
      <div className="text-center mb-4">
      <h2 className="fw-bold">Explore Categories</h2>
      <p className="text-secondary">These are the Food Types </p>
      </div>
      <Row className="g-4">
      <Col>
      <Card className="text-center border-1 h-100">
      <Card.Body>
      <Card.Img variant="top" className='p-4' src="https://static.vecteezy.com/system/resources/thumbnails/015/933/661/small/tandoori-chicken-is-an-indian-non-vegetarian-spicy-food-free-photo.jpg"  />
      <Card.Title  className='fw-bolder' >Non-vegitarian</Card.Title>
      </Card.Body>
      </Card>
      </Col>

      <Col>
      <Card className="text-center border-1  h-100">
      <Card.Body>
      <Card.Img variant="top" className='p-4 ' src="https://static.vecteezy.com/system/resources/thumbnails/071/615/464/small/a-plate-with-rice-vegetables-and-other-food-photo.jpg" />
      <Card.Title  className='fw-bolder' >Vegitarian Food</Card.Title>
      </Card.Body>
      </Card>
      </Col>

      <Col>
      <Card className="text-center border-1 h-100 ">
      <Card.Body>
      <Card.Img variant="top" className='p-4 ' src="https://image.cnbcfm.com/api/v1/image/103983255-GettyImages-520215281.jpg?v=1554401914"  />
      <Card.Title className='fw-bolder' >Fast-Food</Card.Title>
      </Card.Body>
      </Card>
       </Col>
      </Row>
      </Container>
      </section>

      <section className="py-5">
      <Container>
      <div className="text-center mb-5">
      <h2 className="fw-bold">Popular Recipes</h2>
      <p className="text-secondary"> Try some of our most loved recipes </p>
       </div>

      <Row className="g-4">
      <Col>
      <Card className="border-1 h-100">
       <Card.Img variant="top"  height="230"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGBBiTi5w_TPN3BhiZINjc_A_Y9VbDnEEJK6LN9tNRvLidY9zkKgDH90&s=10"
       style={{ objectFit: 'cover' }}/>
         <Card.Body>
        <Badge bg="warning" text="dark">Non-Vegitarian</Badge>
        <Card.Title className="mt-2"> Dum Biriyani </Card.Title>
         <Card.Text className="text-secondary">
         a world-renowned, aromatic mixed rice dish made by layering fragrant rice with spiced marinated meat, fish, or vegetables and slow-cooking it to perfection
         </Card.Text>
          <Button as={Link} to="/information/1" variant="success">  View Recipe</Button>
          </Card.Body>
          </Card>
          </Col>

            <Col >
            <Card className="border-1  h-100">
            <Card.Img variant="top" height="230"
            src="https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg" style={{ objectFit: 'cover' }}/>
            <Card.Body>
            <Badge bg="success">Vegitarian </Badge>
            <Card.Title className="mt-2"> Masala-Dosa </Card.Title>
            <Card.Text className="text-secondary">a famous South Indian dish made of a crispy, golden-brown crepe (dosa) stuffed with a savory and spiced potato filling
            </Card.Text>
            <Button as={Link}  to="/information/2"  variant="success">  View Recipe  </Button>
            </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card className="border-1 h-100">
            <Card.Img variant="top" height="230"
            src="https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg" style={{ objectFit: 'cover' }}/>
            <Card.Body>
              <Badge bg="danger"> Fast-food</Badge>
            <Card.Title className="mt-2"> Dynamic-Burger </Card.Title>
            <Card.Text className="text-secondary">a popular dish made with a cooked ground meat patty, usually beef, placed inside a sliced bread roll or bun
            </Card.Text>
            <Button as={Link} to="/information/3" variant="success">  View Recipe </Button>
            </Card.Body>
            </Card>
            </Col>
            </Row>

          <div className="text-center mt-5 ">
          <Button as={Link} to="/recipe" variant="warning" size="lg"> View All Recipes</Button>
          </div>
          </Container>
          </section>
    </div>
  );
}

export default Home;