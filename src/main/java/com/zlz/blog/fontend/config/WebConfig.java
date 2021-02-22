package com.zlz.blog.fontend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author zhulinzhong
 * @version 1.0 CreateTime:2020/1/17 10:09
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new BlogUserInterceptor()).addPathPatterns("/**")
                .excludePathPatterns("static/**")
                .excludePathPatterns("/index")
                .excludePathPatterns("/login")
                .excludePathPatterns("/index/index")
                .excludePathPatterns("/user/basicuserinfo")
                .excludePathPatterns("/user/safetyinfo")
                .excludePathPatterns("/blog/bloglist")
                .excludePathPatterns("/blog/typemanage")
                .excludePathPatterns("/write/write")
                .excludePathPatterns("/write/recycle")
                .excludePathPatterns("/webinfo");
    }
}
