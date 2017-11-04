//加载svg图标的util工具类
import {MdIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

export const loadSvgResources = (ir:MdIconRegistry,ds:DomSanitizer)=>{
  const imgDir = `assets/img`
  const sidebarDir = `${imgDir}/sidebar`
  //日期
  const dayDir = `${imgDir}/days`
  //头像
  const avatarDir = `${imgDir}/avatar`
  //icon
  const iconDir = `${imgDir}/icons`
  //这里加载存在本地或者网的svg
  //ir.addSvgIcon(`xxx`,ds.bypassSecurityTrustResourceUrl(`${slidebar}/xx`))
  ir.addSvgIconSetInNamespace('avatars',ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`))
  ir.addSvgIcon(`day`,ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/day.svg`))
  ir.addSvgIcon(`month`,ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/month.svg`))
  ir.addSvgIcon(`unassigned`,ds.bypassSecurityTrustResourceUrl(`${avatarDir}/unassigned.svg`))
  ir.addSvgIcon(`project`,ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/project.svg`))
  ir.addSvgIcon(`projects`,ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/projects.svg`))
  ir.addSvgIcon(`week`,ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/week.svg`))
  ir.addSvgIcon(`move`,ds.bypassSecurityTrustResourceUrl(`${iconDir}/move.svg`))
  ir.addSvgIcon(`add`,ds.bypassSecurityTrustResourceUrl(`${iconDir}/add.svg`))
  ir.addSvgIcon(`delete`,ds.bypassSecurityTrustResourceUrl(`${iconDir}/delete.svg`))
  for (let i=1;i<=31;i++){
    let name = `day${i}`
    ir.addSvgIcon(name,ds.bypassSecurityTrustResourceUrl(`${dayDir}/${name}.svg`))
  }

}
