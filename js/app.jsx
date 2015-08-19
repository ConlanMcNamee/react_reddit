var React = require('react');



var Header = React.createClass({
	render: function() {
		return (
			<header id="banner">
				<nav> 
					<a href="https://www.reddit.com">Front </a>
					<a href="https://www.reddit.com/r/all">All </a>
					<a href="https://www.reddit.com/r/random">Random </a>

				</nav>
			</header>
		)
	}
})

var Post = React.createClass({
	render: function() {
		return (
			<li>
				<h2><a href={this.props.post.link}>{this.props.post.title}</a></h2>
			</li>
		)
	}
})

var PostList = React.createClass({
	render: function() {
		var ourList = this.props.postList.map(function(post) {
			return <Post post={post} />
		})
		return (
			<section>
				<ul>
					{ourList}
				</ul>
			</section>
		)
	}
})

var Content = React.createClass({
	addPost: function(post) {
		this.setState({
			post: this.state.post.concat([post])
		})
	},
	getInitialState: function() {
		return {
			post: [ {
				title: 'This is a great place to learn!',
				link: "https://www.codefellows.org/" 
			},
			{
				title: 'Look at this site that lets you search for anything!',
				link: "https://www.google.com"
			},
			{
				title: 'This place helps you learn the basics of programming!',
				link: "https://www.codecademy.com/"
			}
			]
		}
	},

	render: function() {
		return (
			<div id="content">
				<PostList addPost={this.addPost} postList={this.state.post} />
			</div>
		)
	}
})

var App = React.createClass({
	render: function() {
		return (
			<main>
				<Header />
				<Content />
				<h1>{this.props.appName}</h1>
			</main>
		);
	}
});


React.render(<App appName='reddit through react' />, document.body);