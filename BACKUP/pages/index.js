import scss from "../styles.scss"

export default () => <div>
	<style global jsx>{`
		body {
			color: white;
			background: black;
		}
	`}</style>
	<img src="static/logo-uol.png"></img>
	<h1 className={scss.example}>Hello World</h1>
</div>
