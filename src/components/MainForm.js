import Form from 'react-bootstrap/Form';

function MainForm(){
    return(
        <Form>
            <Form.Group controlId="chatFile">
                <Form.Label>Файл чата</Form.Label>
                <Form.Control type = "file"/>
            </Form.Group>
            <Form.Group controlId="settings">
                <Form.Label>Настройки</Form.Label>
                <Form.Check type='switch' label='Кал 1'/>
                <Form.Check type='switch'>Кал 2</Form.Check>
            </Form.Group>
        </Form>   
    );
}

export default MainForm;