import { DISHES } from '../components/Shared/dishes.js';

export const Dishes = (state = DISHES, action) => {
	switch(action.type){
		default:
			return state;
	}
}