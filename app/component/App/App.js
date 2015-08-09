require('./App.css');
var React = require('react');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header className="nv-header"><p></p></header>
        <div className="nv-searcher">
          <form action="http://www.baidu.com/s" name="f">
            <input type="text" className="nv-searcher-input" name="wd" id="kw" maxlength="100" autocomplete="off"/><input type="submit" className="nv-searcher-submit" value="Search" id="su"/>
          </form>
         </div>
        <div className="bookmarksbox">
          <div className="bookmarksbox-header"></div>
          <ul className="bookmarksbox-body">
            <li className="bookmarksbox-body-item"><a href="https://www.google.com/" target="_blank"><span>Google</span></a></li>
            <li className="bookmarksbox-body-item"><a href="https://github.com/" target="_blank"><span>Github</span></a></li>
            <li className="bookmarksbox-body-item"><a href="http://weibo.com/" target="_blank"><span>新浪微博</span></a></li>
            <li className="bookmarksbox-body-item"><a href="http://www.imooc.com/" target="_blank"><span>慕课网</span></a></li>
            <li className="bookmarksbox-body-item"><a href="http://pan.baidu.com/disk/home" target="_blank"><span>百度云盘</span></a></li>
            <li className="bookmarksbox-body-item"><a href="http://www.lishengcn.cn" target="_blank"><span>李胜的脚步</span></a></li>
            <li className="bookmarksbox-body-item"><a href="https://mail.qq.com" target="_blank"><span>QQ邮箱</span></a></li>
            <li className="bookmarksbox-body-item"><a href="http://mail.163.com/" target="_blank"><span>163邮箱</span></a></li>
            <li className="bookmarksbox-body-item"><a href="http://so.baiduyun.me/" target="_blank"><span>百度云搜索</span></a></li>
            <li className="bookmarksbox-body-item"><a href="http://codepen.io/" target="_blank"><span>CodePen</span></a></li>
            <li className="bookmarksbox-body-item"><a href="http://segmentfault.com/" target="_blank"><span>SegmentFault</span></a></li>
            <li className="bookmarksbox-body-item"><a href="http://www.zhangxinxu.com/wordpress/" target="_blank"><span>zxy's Blog</span></a></li>
            <li className="bookmarksbox-body-item"><a href="http://www.ruanyifeng.com/blog/" target="_blank"><span>阮一峰</span></a></li>
            <li className="bookmarksbox-body-item"><a href="http://www.liaoxuefeng.com/" target="_blank"><span>廖雪峰</span></a></li>
            <li className="bookmarksbox-body-item"><a href="http://gold.xitu.io/" target="_blank"><span>稀土掘金</span></a></li>
            <li className="bookmarksbox-body-item"><a href="http://www.w3ctech.com/" target="_blank"><span>W3CTech</span></a></li>
            <li className="bookmarksbox-body-item"><a href="http://www.w3cplus.com/" target="_blank"><span>W3CPlus</span></a></li>
            <li className="bookmarksbox-body-item"><a href="http://www.react-china.org/" target="_blank"><span>React China</span></a></li>
            <li className="bookmarksbox-body-item"><a href="http://www.web-tinker.com/" target="_blank"><span>次碳酸钴</span></a></li>
            <li className="bookmarksbox-body-item"><a href="http://www.alloyteam.com/" target="_blank"><span>alloyteam</span></a></li>
            <li className="bookmarksbox-body-item"><a href="http://www.html-js.com/" target="_blank"><span>前端乱炖</span></a></li>
            <li className="bookmarksbox-body-item"><a href="http://f2e.souche.com/blog/" target="_blank"><span>大搜车前端团队博客</span></a></li>
          </ul>
        </div>
        <div className="bookmarksbox">
          <div className="bookmarksbox-header"></div>
          <ul className="bookmarksbox-body">
            <li className="bookmarksbox-body-item"><a href="https://tower.im/" target="_blank"><span>Tower</span></a></li>
            <li className="bookmarksbox-body-item"><a href="http://wiki.ele.to:8090/" target="_blank"><span>eleme'wiki</span></a></li>
          </ul>
        </div>
        <img className="avatar" src="avatar.gif" alt=""/>
      </div>
    )
  }
});

module.exports = App;