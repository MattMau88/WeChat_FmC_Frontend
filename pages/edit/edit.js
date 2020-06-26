// pages/edit/edit.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this;

    wx.showToast({
      title: 'Loading...',
      icon: 'loading',
      duration: 1500
    });

    // Get story data from server (to show in form)
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${options.id}`,
      method: 'GET',
      success(res) {
        var story = res.data;

        // Update local data
        page.setData(
          story
        );

        wx.hideToast();
      }
    });
  },

  formSubmit: function (e) {

  	//...

    let name = e.detail.value.name;
    let text = e.detail.value.text;
    let id = this.data.id;

    let story = {
      name: name,
      text: text
    }

    // Update api data
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${id}`,
      method: 'PUT',
      data: story,
      success() {
        // redirect to index page when done
        wx.redirectTo({
          url: '/pages/index/index'
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