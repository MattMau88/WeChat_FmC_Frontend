const app = getApp();

Page({
  data: {
    stories: app.globalData.stories
  },

  // --- Custom Functions ---

  refreshData: function () {
    const stories = app.globalData.stories

    this.setData({ stories });
  },

  onLoad: function () {
    
  },

  onShow: function (options) {
    // this.refreshData();
    let page = this;

    // Get api data
    wx.request({
      url: "http://localhost:3000/api/v1/stories",
      method: 'GET',
      success(res) {
        const stories = res.data.stories;

        // Update local data
        page.setData({
          stories: stories
        });

        wx.hideToast();
      }
    });
  },

  goToStory: function(event) {
    const id = event.currentTarget.dataset.story.id
   wx.redirectTo({
     url: `/pages/story/story?id=${id}`,
   })
  }

})