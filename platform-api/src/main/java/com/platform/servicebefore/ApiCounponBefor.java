package com.platform.servicebefore;/**
 * Created by Administrator on 2019/8/3.
 */

import com.platform.entity.CouponVo;
import com.platform.entity.UserCouponVo;
import com.platform.service.ApiCouponService;
import com.platform.service.ApiUserCouponService;
import com.platform.utils.CharUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Map;

/**
 * @program: platform
 * @description:
 * @author: whf
 * @create: on 2019/8/3.
 **/
@Service
public class ApiCounponBefor {
    @Autowired
    private ApiCouponService apiCouponService;
    @Autowired
    private ApiUserCouponService apiUserCouponService;
    public void saveCouponFirst(Long userId, Map couponParam){
        CouponVo newCouponConfig = apiCouponService.queryMaxUserEnableCoupon(couponParam);
        if (null != newCouponConfig) {
            UserCouponVo userCouponVo = new UserCouponVo();
            userCouponVo.setAdd_time(new Date());
            userCouponVo.setCoupon_id(newCouponConfig.getId());
            userCouponVo.setCoupon_number(CharUtil.getRandomString(12));
            userCouponVo.setUser_id(userId);
            apiUserCouponService.save(userCouponVo);
        }
    }
}
