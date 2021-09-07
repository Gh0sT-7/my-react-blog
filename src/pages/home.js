import React from 'react'
import {PostMasonry, MasonryPost, PostGrid} from '../components/common'
import trending from '../assets/mocks/trending'
import featured from '../assets/mocks/featured'

const trendingConfig = {
	1: {
		gridArea: '1 / 2 / 3 / 3',
		height: '600px',
	}
}

const featuredConfig = {
    0: {
        gridArea: '1 / 1 / 2 / 3',
        height: '300px'

    },
    1: {
        height: '300px'
    },
    3: {
        height: '630px',
        marginLeft: '30px',
        width: '550px   '
    }
}

const mergeStyles = function(posts, config) {
	posts.forEach((post, index) => {
		post.style = config[index]
		post.author = 'James Mills'
		post.descritpion = 'Well, the way they make shows is, they make one show. That show\'s called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they\'re going to make more shows. Some pilots get picked and become television programs. Some don\'t, become nothing. She starred in one of the ones that became nothing.'
	})
}

const recentPosts = [...trending, ...featured, ...featured]

mergeStyles(trending, trendingConfig)
mergeStyles(featured, featuredConfig)

const lastFeaturedPost = featured.pop()

export default function Home() {
	return (
		<main className="home">
			<section className="container">
				<div className="row">
					<br />
					<h1>Blog</h1>
					<section className="featured-posts-container">
						<PostMasonry posts={featured} columns={2} tagsOnTop={true} />
						<MasonryPost post={lastFeaturedPost} columns={1} tagsOnTop={true} />
					</section>
					
					<hr />
					
					<section className="bg-white">
						<section className="container">
							<div className="row">
								<br />
								<h1>Recent Posts</h1>
								<PostGrid posts={recentPosts} />
							</div>
						</section>
					</section>
					
					<hr />

					<section className="container">
						<div className="row">
							<PostMasonry posts={trending} columns={3} />
						</div>
					</section>
				</div>
			</section>
		</main>
	)
}
