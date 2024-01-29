import React, { Fragment } from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'
import about from "../../assets/images/about-us.jpg"
import { BarChart, Bar ,XAxis,Tooltip,ResponsiveContainer} from "recharts";

const data = [
    {
      name: "Web",
      Videos: 150

    },
    {
      name: "Civil",
      Videos: 200
  
    },
    {
      name: "Hospital",
      Videos: 200
   
    },
    {
      name: "Artificial",
      Videos: 278
    },
    {
      name: "General",
      Videos: 189
   
    },
    {
      name: "History",
      Videos: 239
   
    },
    {
      name: "Chef",
      Videos: 349
   
    }
  ];


const Analysis = () => {

  return (
    <Fragment>

        <Container fluid={true} className="summaryBanner summarySection p-0 ">
            <div className="summaryOverlay">
               <Container className="text-center mt-5">

           
            <Row>
                <Col style={{width:'50%', height:'350px'}}  sm={12} md={6} lg={6} >
                    
                    <ResponsiveContainer>    
                      <BarChart width={50} height={350} data={data}>
                          <XAxis dataKey="name"/>
                          <Tooltip/>
                          <Bar dataKey="Videos" fill="#18A1C1" />
                      </BarChart> 
                    </ResponsiveContainer>  
                 
                </Col>

                <Col sm={12} md={6} lg={6}>
                    <Card>
                        <Card.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aperiam eos dolor sunt ex ducimus voluptate quas error? Quidem, fugiat fugit. Voluptate et neque sequi omnis sint alias saepe maxime magnam inventore quas quibusdam vitae, voluptatum iure libero sed at, accusamus officiis beatae? Nihil alias adipisci nesciunt iste, voluptatibus nobis excepturi, reiciendis veniam perferendis ad voluptas. Nesciunt praesentium neque eius facere delectus, voluptatum enim amet, nisi mollitia suscipit fugiat? Ducimus est sint rem dicta dolorum distinctio at, dignissimos corrupti praesentium nulla, ullam, temporibus aperiam nobis illum quaerat soluta nostrum reprehenderit. Doloremque nobis inventore ipsam rerum, deleniti autem excepturi vitae dignissimos?

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container> 
            </div>
        </Container>
    </Fragment>
  )
}

export default Analysis