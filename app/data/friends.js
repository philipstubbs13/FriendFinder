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
	  "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
	},

	{
	  "name": "Trae Young",
	  "photo": "https://cdn.vox-cdn.com/thumbor/xi7t5IWIeoLQPcMKJQiCPzblTqc=/1185x607:4443x3080/1200x800/filters:focal(2339x1411:3229x2301)/cdn.vox-cdn.com/uploads/chorus_image/image/58081117/usa_today_10481466.0.jpg",
	  "scores": [3, 2, 5, 1, 1, 2, 2, 2, 3, 4]
	},

	{
	  "name": "Grayson Allen",
	  "photo": "https://img.bleacherreport.net/img/images/photos/003/718/021/hi-res-b730f72c8a3f46d9fc55a4af6a974e03_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
	  "scores": [3, 3, 3, 3, 3, 2, 4, 4, 5, 5]
	}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsData;
