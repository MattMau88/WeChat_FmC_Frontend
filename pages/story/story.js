// pages/story/story.js
const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    // stories: app.globalData.stories
  },

  // refreshData: function () {
  //   const stories = app.globalData.stories

  //   this.setData({ stories });
  // },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this;

    // Get api data
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${options.id}`,
      method: 'GET',
      success(res) {
        const story = res.data;

        // Update local data
        page.setData(
          story
        );

        wx.hideToast();
      }
    });
  },
  goToEdit: function(event) {
    const id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/edit/edit?id=${id}`,
    })
  },

  deleteStory(e) {
    const data = e.currentTarget.dataset;

    // make a DELETE request
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${data.id}`,
      method: 'DELETE',
      success() {
        // redirect to index page when done
        wx.switchTab({
          url: '/pages/stories/stories'
        });
      }
    });
  },
 
  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})