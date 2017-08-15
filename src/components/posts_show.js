import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
	componentDidMount() {
		if(this.props.post)
			return;

		const { id }  = this.props.match.params;
		this.props.fetchPost(id);
	}

	onDeleteClick(event) {
		const { id } = this.props.match.params;
		this.props.deletePost(id, () => {
			this.props.history.push('/');
		});
	}

	render() {
		const { post } = this.props;

		if(!post) {
			return <div>Carregando...</div>;
		}

		return (
			<div>
				<div className="row">
					<div className="col-sm-12">
						<Link className="btn btn-info pull-right" to="/">Voltar para listagem</Link>
						<button
							className="btn btn-danger pull-xs-right pull-left"
							onClick={this.onDeleteClick.bind(this)}>
						Remover postagem
						</button>
					</div>
				</div>
				<br/>
				<br/>
				<div className="row">
					<div className="col-sm-12">
						<h3>{post.title}</h3>
						<h6>Categories: {post.categories}</h6>
						<p>{post.content}</p>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ posts }, ownProps) {
	return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);