import React, {Component} from 'react';
import { Label, Col, Row, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class ComForm extends Component{
		
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false
		};
		this.handelSubmit = this.handelSubmit.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleModal() {
		this.setState({
			isModalOpen: !(this.state.isModalOpen)
		});
	}

	handelSubmit(values) {
       	this.toggleModal();
       	this.props.addComment(this.props.dishId, values.rating, values.author, values.message);
    }

	render(){
		return(
			<>
				<Button outline onClick={this.toggleModal}>
					Submit Comment
				</Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader> 
					<ModalBody>
						<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
							<Row className="form-group">
								<Label htmlFor="rating" md={2}>Rating</Label>
								<Col>
									<Control.select model=".rating" className="form-control" name="rating">
										<option>1</option>
							            <option>2</option>
							            <option>3</option>
							            <option>4</option>
							            <option>5</option>
						            </Control.select>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="author" md={2}>Your Name</Label>
								<Col>
									<Control.text model=".author" id="author" name="author" className="form-control" placeholder="Author" validators={{minLength: minLength(3),maxLength: maxLength(15)}} />
									<Errors className="text-danger" model=".author" show="touched" messages={{minLength: 'Must be greater than 2 characters',maxLength: 'Must be 15 characters or less'}} />
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="message" md={2}>Your Comment</Label>
								<Col>
		                            <Control.textarea model=".message" id="message" name="message" rows="6" className="form-control" />
			                    </Col>
							</Row>
						</LocalForm>
						<Button className="primary" onClick={this.toggleModal}>
							Submit
						</Button>
					</ModalBody>
				</Modal>
			</>
		);
	}	
}

export default ComForm;