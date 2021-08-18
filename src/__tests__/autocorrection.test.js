import {render, fireEvent} from '@testing-library/react'
import {AutoCorrection} from '../AutoCorrection'


const setUp=() =>{
    
   const {container} = render(<AutoCorrection />)
    return container    
}


describe('autoCorrection test', () => {
 
    
    test('should NOT change the input', async() => {
        // const {container} = render(<AutoCorrection />)
        const container=setUp()
            fireEvent.change(container.firstChild,{target: {value: 'test'}})       
            expect(container.firstChild.value).toBe("test")
            
        })
        
    test('should change realy to really', () => {
            const container=setUp()
        fireEvent.change(container.firstChild,{target: {value: 'realy '}})       
        expect(container.firstChild.value).toBe("really ")        
    })

    test('should change increament to increment', () => {
            const container=setUp()
        fireEvent.change(container.firstChild,{target: {value: 'increament '}})       
        expect(container.firstChild.value).toBe("increment ")        
    })
    
    test('should NOT touch the an space', () => {
        const container=setUp()
    fireEvent.change(container.firstChild,{target: {value: ' '}})       
    expect(container.firstChild.value).toBe(" ")        
})
    
    
})


