package com.platform.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import springfox.documentation.builders.ParameterBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
import springfox.documentation.service.Parameter;

import java.util.ArrayList;
import java.util.List;

@Configuration
@EnableWebMvc
@EnableSwagger2
@ComponentScan(basePackages="com.platform.api")
public class SwaggerConfig {

    @Bean
    public Docket api(){
        ParameterBuilder ticketPar = new ParameterBuilder();
        List<Parameter> pars = new ArrayList<Parameter>();
        ticketPar.name("X-Nideshop-Token").description("user token")
                .modelRef(new ModelRef("string")).parameterType("header")
                .required(false).build(); //header中的ticket参数非必填，传空也可以
        pars.add(ticketPar.build());    //根据每个方法名也知道当前方法在设置什么参数
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(this.apiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.platform.api"))
                .paths(PathSelectors.any())
                .build()
                .globalOperationParameters(pars)  ;
    }


    private ApiInfo apiInfo(){
        @SuppressWarnings("deprecation")
        ApiInfo info=new ApiInfo(
                "小程序接口文档",
                "小程序接口文档",
                "1.0",
                "urn:tos",
                "platform",
                "Apache 2.0",
                "http://www.apache.org/licenses/LICENSE-2.0");
        return info;
    }
}