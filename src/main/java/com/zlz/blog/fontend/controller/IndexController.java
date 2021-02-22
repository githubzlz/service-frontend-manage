package com.zlz.blog.fontend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author zhulinzhong
 * @version 1.0 CreateTime:2020/1/17 10:42
 */
@Controller
public class IndexController {

    @RequestMapping("httpstest")
    @ResponseBody
    public String test(){
        return "https访问成功";
    }

    /**
     * 添加angular的所有路由
     * @return
     */
    @RequestMapping(value = {"/login","/index", "/index/index","/user/basicuserinfo","/user/safetyinfo",
            "/blog/bloglist","/blog/typemanage","/write/write","/write/recycle","/webinfo"})
    public String getIndex(){
        return "/index.html";
    }
}
