package com.zlz.blog.fontend.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author zhulinzhong
 * @version 1.0 CreateTime:2020/1/17 10:13
 */
public class BlogUserInterceptor extends HandlerInterceptorAdapter {

    private final Logger logger = LoggerFactory.getLogger(BlogUserInterceptor.class);

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        logger.info(request.getRequestURI());
        String[] split = request.getRequestURI().split("\\.");
        if(split.length >= 2){
            String suffix = split[split.length-1];
            if(!StringUtils.isEmpty(suffix)){
                return true;
            }
        }

        logger.info("重定向");
        response.sendRedirect("/");
        return true;
    }
}
