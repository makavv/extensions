/**
 * pun_cool_avatars common javascript functions
 *
 * @copyright (C) 2009 PunBB
 * @license http://www.gnu.org/licenses/gpl.html GPL version 2 or higher
 * @package pun_cool_avatars
 */

Forum.addPreviewTemplatesBlock = function()
{
	var imgElem = document.createElement('img');
	imgElem.id = 'template_image';

	document.getElementById('div_aet').appendChild(imgElem);
	updateImg();
}
Forum.addEvent = function(elm, evType, fn, useCapture)
{
	if (elm.addEventListener) {
		elm.addEventListener(evType, fn, useCapture);
		return true;
	}
	else if (elm.attachEvent) {
		var r = elm.attachEvent('on' + evType, fn);
		return r;
	}
	else {
		elm['on' + evType] = fn;
	}
}