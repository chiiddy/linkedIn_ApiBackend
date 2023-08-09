User
	ObjectId
	firstName
	lastName
	email
	password
	createdOn
	posts[Post]
	

Post
	ObjectId
	description
	files[{
		file,
		fileType
	}]
	comment[Comment]
	createdOn

	
Comment
	ObjectId
	user{User}
	reply{Comment}
	comment
	createdOn
	
Like
	ObjectId
	user{User}
	post{Post}
	comment{Comment}
	likeType["thumbUp","heart","insightful","support","celebrate","funny"] 
	createdOn
	


FollowerFollowing
	ObjectId
	userId{User}
	following{User}