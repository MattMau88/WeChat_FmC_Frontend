const app = getApp();

Page({

  data: {

  },

  setStorage: function (story) {
    app.globalData.stories.push(story);
  },

  navigateToStories: function () {
    wx.switchTab({
      url: '/pages/stories/stories',
    });
  },

  formSubmit: function (e) {
    let name = e.detail.value.name;
    let text = e.detail.value.text;

    let story = {
      name: name,
      text: text
    }
    console.log(story)
    // Post data to API
    wx.request({
      url: `http://localhost:3000/api/v1/stories`,
      method: 'POST',
      data: story,
      success() {
        // redirect to index page when done
        wx.switchTab({
          url: '/pages/stories/stories'
        });
      }
    });
  },

  onLoad: function (options) {

  },
})