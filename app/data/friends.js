// ===============================================================================
// DATA
// Below data will hold all of the friends.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsData = [
	{
	  "name": "Steph Curry",
	  "photo": "https://espntheundefeated.files.wordpress.com/2017/04/20170405_mjr_su5_046_13725708.jpg?w=1024",
	  "scores": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	},

	{
	  "name": "Trae Young",
	  "photo": "https://cdn.vox-cdn.com/thumbor/xi7t5IWIeoLQPcMKJQiCPzblTqc=/1185x607:4443x3080/1200x800/filters:focal(2339x1411:3229x2301)/cdn.vox-cdn.com/uploads/chorus_image/image/58081117/usa_today_10481466.0.jpg",
	  "scores": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
	},

	{
	  "name": "Grayson Allen",
	  "photo": "https://img.bleacherreport.net/img/images/photos/003/718/021/hi-res-b730f72c8a3f46d9fc55a4af6a974e03_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
	  "scores": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
	},

	{
	  "name": "Zach LaVine",
	  "photo": "https://espngrantland.files.wordpress.com/2014/09/453120688-e1411503677676.jpg?w=2048",
	  "scores": [2, 2, 2, 2, 2, 4, 4, 4, 4, 4]
	},

	{
	  "name": "Justin Bieber",
	  "photo": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Justin_Bieber_in_Rosemont%2C_Illinois_%282015%29.jpg",
	  "scores": [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
	},

	{
	  "name": "Selena Gomez",
	  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Selena_Gomez_-_Walmart_Soundcheck_Concert.jpg/492px-Selena_Gomez_-_Walmart_Soundcheck_Concert.jpg",
	  "scores": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
	},

	{
	  "name": "Jennifer Lawrence",
	  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Jennifer_Lawrence_SDCC_2015_X-Men.jpg/1200px-Jennifer_Lawrence_SDCC_2015_X-Men.jpg",
	  "scores": [3, 3, 4, 4, 4, 5, 5, 2, 1, 2]
	}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsData;
