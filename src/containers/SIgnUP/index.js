import React from 'react'
import Layout from '../../components/Layout'
import { Container } from 'react-bootstrap'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/Input'
export default function SignUp() {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col>
                 <Input 
                   label = "fIRST NAME"
                   placeholder = 'first name'
                   value = ""
                  type = "text"
                  onChange = {()=> {}}
                   />
                </Col>
                <Col>
                   <Input 
                   label = "Last NAME"
                   placeholder = 'last name'
                   value = ""
                  type = "text"
                  onChange = {()=> {}}
                   />
                </Col>
              </Row>
              <Input 
                   label = "Email"
                   placeholder = 'email'
                   value = ""
                  type = "email"
                  onChange = {()=> {}}
                   />

              <Input 
                   label = "password"
                   placeholder = 'password'
                   value = ""
                  text = "password"
                  onChange = {()=> {}}
                   />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>

      </Container>
    </Layout>
  )
}
