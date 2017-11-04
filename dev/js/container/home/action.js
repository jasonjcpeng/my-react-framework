/**
 * Created by pengjingcheng on 2017/7/10.
 */
import ARC from 'ARC'
import {testForGetContent} from '../../api/api'

export const actionShowMenu = ARC.CreateAction('HOME/CLICK/TOGGLE/MENU',1)
export const actionGetMenuContent = ARC.AsyncCreateAction('HOME/MENU/GET/CONTENT',testForGetContent)
